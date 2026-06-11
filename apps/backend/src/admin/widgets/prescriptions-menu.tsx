import { defineWidgetConfig } from "@medusajs/admin-sdk"
import { Container } from "@medusajs/ui"

const TestWidget = () => {
  return (
    <Container>
      Prescription Test Widget
    </Container>
  )
}

export const config = defineWidgetConfig({
  zone: "product.details.after",
})

export default TestWidget