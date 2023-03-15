import { Table } from "flowbite-react";

export default function SalesReportTable() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-8 col-start-3 mb-14">
          <Table hoverable={true}>
            <Table.Head className="bg-emerald-300">
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell>Product Name</Table.HeadCell>
              <Table.HeadCell>Quantity</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>Purchased By</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">View Product</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white hover:bg-opacity-90">
                <Table.Cell>1</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple MacBook Pro 17</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>itsaFan</Table.Cell>
                <Table.Cell>
                  <a href="/tables" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    View Product
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white hover:bg-opacity-90">
                <Table.Cell>1</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple MacBook Pro 17</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>itsaFan</Table.Cell>
                <Table.Cell>
                  <a href="/tables" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    View Product
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white hover:bg-opacity-90">
                <Table.Cell>1</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple MacBook Pro 17</Table.Cell>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>itsaFan</Table.Cell>
                <Table.Cell>
                  <a href="/tables" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    View Product
                  </a>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
}
