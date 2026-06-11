import { useEffect, useState } from "react";
import { Container, Heading, Table } from "@medusajs/ui";
import { Link } from "react-router-dom";

export default function PrescriptionsPage() {
  const [prescriptions, setPrescriptions] = useState<any[]>([]);

  useEffect(() => {
    fetch("/admin/prescriptions", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPrescriptions(data.prescriptions || []);
      });
  }, []);
  
  return (
    <Container className="p-6">
      <Heading level="h1">Prescriptions</Heading>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Image</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {prescriptions.map((p) => (
            <Table.Row key={p.id}>
              <Table.Cell>
                <Link
                  to={`/prescriptions/${p.id}`}
                  className="text-ui-fg-interactive"
                >
                  {p.id.slice(0, 8)}
                </Link>
              </Table.Cell>
              <Table.Cell>{p.customer_name}</Table.Cell>
              <Table.Cell>{p.email}</Table.Cell>
              <Table.Cell>{p.phone_number}</Table.Cell>
              <Table.Cell>
                <div className="max-w-[300px] truncate">{p.address}</div>
              </Table.Cell>
              <Table.Cell>
                {new Date(p.created_at).toLocaleDateString()}
              </Table.Cell>

              <Table.Cell>
                <a href={`/${p.image_url}`} target="_blank">
                  View
                </a>
              </Table.Cell>
              <Table.Cell>{p.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
}
