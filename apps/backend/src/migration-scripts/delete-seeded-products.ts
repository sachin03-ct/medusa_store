import {
  ContainerRegistrationKeys,
} from "@medusajs/framework/utils"

import {
  deleteProductsWorkflow,
} from "@medusajs/medusa/core-flows"

export default async function deleteSeededProducts({
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

  logger.info(
    "Fetching seeded medicines..."
  )

  const { data: products } =
    await query.graph({
      entity: "product",
      fields: ["id", "title", "metadata"],
    })

  const seededProducts = products.filter(
    (product: any) =>
      product.metadata?.seeded === true
  )

  if (!seededProducts.length) {

    logger.info(
      "No seeded medicines found."
    )

    return
  }

  logger.info(
    `Deleting ${seededProducts.length} seeded medicines...`
  )

  await deleteProductsWorkflow(container).run({
    input: {
      ids: seededProducts.map(
        (product: any) => product.id
      ),
    },
  })

  logger.info(
    "Seeded medicines deleted successfully!"
  )
}