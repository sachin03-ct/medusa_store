import { Container, Heading, Badge, Button } from "@medusajs/ui";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

export default function PrescriptionDetails() {
  const { id } = useParams();

  const [prescription, setPrescription] = useState<any>(null);

  const approvePrescription = async () => {
    await fetch(`/admin/prescriptions/${id}/approve`, {
      method: "POST",
      credentials: "include",
    });

    window.location.reload();
  };

  const rejectPrescription = async () => {
    await fetch(`/admin/prescriptions/${id}/reject`, {
      method: "POST",
      credentials: "include",
    });

    window.location.reload();
  };

  const createDraftOrder = async () => {
    window.location.href = `/app/draft-orders/create`;
  };
  // useEffect here...

  useEffect(() => {
    fetch(`/admin/prescriptions/${id}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setPrescription(data));
  }, [id]);

  if (!prescription) {
    return <Container className="p-6">Loading...</Container>;
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <Container className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <Heading level="h1">Prescription</Heading>

            <p className="text-ui-fg-subtle mt-1">
              {prescription.prescription_id}
            </p>
          </div>

          <Badge
            color={
              prescription.status === "approved"
                ? "green"
                : prescription.status === "rejected"
                  ? "red"
                  : "orange"
            }
          >
            {prescription.status}
          </Badge>
        </div>

        <div className="flex gap-3 mt-6">
          <Button onClick={approvePrescription}>Approve</Button>

          <Button variant="secondary" onClick={rejectPrescription}>
            Reject
          </Button>

          <Button variant="secondary" onClick={createDraftOrder}>
            Create Draft Order
          </Button>
        </div>
      </Container>

      {/* Content */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left */}
        <div className="col-span-4">
          <Container className="p-6">
            <Heading level="h2">Customer Details</Heading>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-ui-fg-subtle">Customer Name</p>
                <p className="font-medium">{prescription.customer_name}</p>
              </div>

              <div>
                <p className="text-ui-fg-subtle">Email Address</p>

                <p className="font-medium">{prescription.email}</p>
              </div>

              <div>
                <p className="text-ui-fg-subtle">Phone Number</p>
                <p className="font-medium">{prescription.phone_number}</p>
              </div>

              <div>
                <p className="text-ui-fg-subtle">Address</p>
                <p className="font-medium">{prescription.address}</p>
              </div>

              <div>
                <p className="text-ui-fg-subtle">Submitted On</p>
                <p className="font-medium">
                  {new Date(prescription.created_at).toLocaleString()}
                </p>
              </div>
            </div>
          </Container>
        </div>

        {/* Right */}
        <div className="col-span-8">
          <Container className="p-6">
            <Heading level="h2">Prescription Image</Heading>

            <div className="mt-6 border rounded-lg overflow-hidden bg-ui-bg-subtle">
              <img
                src={`/admin/prescription-image/${prescription.image_url
                  .split("/")
                  .pop()}`}
                alt="Prescription"
                className="
                w-full
                max-h-[900px]
                object-contain
              "
              />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
