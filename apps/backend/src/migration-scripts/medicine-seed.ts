import {
  ContainerRegistrationKeys,
  ProductStatus,
} from "@medusajs/framework/utils"

import {
  createProductsWorkflow,
  deleteProductsWorkflow,
} from "@medusajs/medusa/core-flows"

const medicinesByCategory: Record<string, any[]> = {

  diabetes: [
    
    {
      title: "Glimepiride Tablets",
      description:
        "Anti-diabetic medicine that improves insulin response.",
    },
    {
      title: "Januvia",
      description:
        "Prescription medicine used for diabetes management.",
    },
    {
      title: "Gluconorm-G",
      description:
        "Combination medicine for type 2 diabetes treatment.",
    },
  ],

  "heart-care": [
    
    {
      title: "Rosuvastatin",
      description:
        "Used to manage cholesterol and cardiovascular diseases.",
    },
    {
      title: "Telmisartan",
      description:
        "Medicine for high blood pressure treatment.",
    },
  ],

  "stomach-care": [
  
    {
      title: "Omeprazole",
      description:
        "Reduces excess acid production in stomach.",
    },
    {
      title: "Loperamide",
      description:
        "Used for diarrhea and loose motion treatment.",
    },
  ],

    "liver-care": [
  {
    title: "Liv 52",
    description:
      "Supports liver health and improves liver function.",
  },
  {
    title: "Silybon",
    description:
      "Used for liver detoxification and protection.",
  },
  {
    title: "Udiliv",
    description:
      "Medicine used for liver disorders and bile flow.",
  },
  {
    title: "Liver Detox Syrup",
    description:
      "Helps cleanse and support healthy liver activity.",
  },
  {
    title: "Hepamerz",
    description:
      "Used in liver disease and hepatic conditions.",
  },
],

  "bone-care": [
    
    {
      title: "Vitamin D3 Sachet",
      description:
        "Improves calcium absorption and bone health.",
    },
    {
      title: "Jointace",
      description:
        "Supports joint flexibility and bone care.",
    },
    {
      title: "Osteocalcium",
      description:
        "Used for bone density and calcium deficiency.",
    },
  ],

  "kidney-care": [
    {
      title: "Cystone",
      description:
        "Ayurvedic medicine used for kidney stone management.",
    },
    {
      title: "Renalka Syrup",
      description:
        "Helps reduce urinary discomfort and burning.",
    },
    {
      title: "Potassium Citrate",
      description:
        "Used for kidney stone prevention.",
    },
    {
      title: "NephroSafe",
      description:
        "Supports kidney health and detoxification.",
    },
    {
      title: "Ural Sachet",
      description:
        "Helps maintain urinary tract health.",
    },
  ],

  "derma-care": [
  {
    title: "Cetaphil Cleanser",
    description:
      "Gentle skin cleanser for sensitive and dry skin.",
  },
  {
    title: "Clindamycin Gel",
    description:
      "Used for acne and bacterial skin infections.",
  },
  {
    title: "Moisturizing Cream",
    description:
      "Hydrates and nourishes dry skin effectively.",
  },
  {
    title: "Sunscreen SPF 50",
    description:
      "Protects skin from harmful UV rays.",
  },
  {
    title: "Hydrocortisone Cream",
    description:
      "Used for skin irritation and itching relief.",
  },
],

  respiratory: [
    {
      title: "Asthalin Inhaler",
      description:
        "Quick relief inhaler for asthma patients.",
    },
    {
      title: "Montair LC",
      description:
        "Used for allergy and respiratory problems.",
    },
    {
      title: "Cetirizine",
      description:
        "Anti-allergy medicine for respiratory care.",
    },
    {
      title: "Budesonide Respules",
      description:
        "Used for asthma and breathing difficulties.",
    },
    {
      title: "Cough Syrup",
      description:
        "Provides relief from cough and throat irritation.",
    },
  ],
}

export default async function medicineSeed({
  container,
}: {
  container: any
}) {

  const logger = container.resolve(
    ContainerRegistrationKeys.LOGGER
  )

  const query = container.resolve(
    ContainerRegistrationKeys.QUERY
  )

  logger.info("Creating medicines...")

  // DELETE OLD SEEDED PRODUCTS
  const { data: existingProducts } =
    await query.graph({
      entity: "product",
      fields: ["id", "metadata"],
    })

  const seededProducts = existingProducts.filter(
    (product: any) =>
      product.metadata?.seeded === true
  )

  if (seededProducts.length > 0) {

    logger.info(
      `Deleting ${seededProducts.length} old seeded medicines...`
    )

    await deleteProductsWorkflow(container).run({
      input: {
        ids: seededProducts.map(
          (product: any) => product.id
        ),
      },
    })
  }

  // GET ALL CATEGORIES
  const { data: categories } = await query.graph({
    entity: "product_category",
    fields: ["id", "name", "handle"],
  })

  // GET SALES CHANNEL
  const { data: salesChannels } = await query.graph({
    entity: "sales_channel",
    fields: ["id"],
  })

  const salesChannel = salesChannels[0]

  // GET SHIPPING PROFILE
  const { data: shippingProfiles } = await query.graph({
    entity: "shipping_profile",
    fields: ["id"],
  })

  const shippingProfile = shippingProfiles[0]

  const products: any[] = []

  for (const category of categories) {

    const medicines =
      medicinesByCategory[
        category.handle
      ]

    if (!medicines) continue

    for (let i = 1; i <= 10; i++) {

      const medicine =
        medicines[(i - 1) % medicines.length]

      const price =
        Math.floor(Math.random() * 1200) + 100

      products.push({

        metadata: {
          seeded: true,
        },

        title: `${medicine.title} ${i}`,

        handle: `${medicine.title
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9\\s-]/g, "")
          .replace(/\\s+/g, "-")}-${i}`,

        description:
          medicine.description,

        status: ProductStatus.PUBLISHED,

        shipping_profile_id:
          shippingProfile.id,

        category_ids: [category.id],

        weight: 100,

        images: [
          {
            url: `https://picsum.photos/seed/${medicine.title}-${i}/1200/1200`,
          },
          {
            url: `https://picsum.photos/seed/${medicine.title}-2-${i}/1200/1200`,
          },
          {
            url: `https://picsum.photos/seed/${medicine.title}-3-${i}/1200/1200`,
          },
        ],

        options: [
  {
    title: "Pack Size",
    values: [
      "10 Tablets",
      "20 Tablets",
      "30 Tablets",
      "60 Tablets",
    ],
  },
],

variants: [

  {
    title: "10 Tablets",

    sku: `MED-${category.handle}-${i}-10`,

    manage_inventory: true,

    inventory_quantity: 500,

    allow_backorder: false,

    options: {
      "Pack Size": "10 Tablets",
    },

    prices: [
      {
        amount: price,
        currency_code: "inr",
      },
    ],
  },

  {
    title: "20 Tablets",

    sku: `MED-${category.handle}-${i}-20`,

    manage_inventory: true,

    inventory_quantity: 500,

    allow_backorder: false,

    options: {
      "Pack Size": "20 Tablets",
    },

    prices: [
      {
        amount: price + 150,
        currency_code: "inr",
      },
    ],
  },

  {
    title: "30 Tablets",

    sku: `MED-${category.handle}-${i}-30`,

    manage_inventory: true,

    inventory_quantity: 500,

    allow_backorder: false,

    options: {
      "Pack Size": "30 Tablets",
    },

    prices: [
      {
        amount: price + 300,
        currency_code: "inr",
      },
    ],
  },

  {
    title: "60 Tablets",

    sku: `MED-${category.handle}-${i}-60`,

    manage_inventory: true,

    inventory_quantity: 500,

    allow_backorder: false,

    options: {
      "Pack Size": "60 Tablets",
    },

    prices: [
      {
        amount: price + 600,
        currency_code: "inr",
      },
    ],
  },

],

        sales_channels: [
          {
            id: salesChannel.id,
          },
        ],
      })
    }
  }

  await createProductsWorkflow(container).run({
    input: {
      products,
    },
  })

  logger.info(
    "Medicines created successfully!"
  )
}