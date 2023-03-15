import { Dropdown, Table } from "flowbite-react";
import Image from "next/image";
import CartIcon from "../icons/cart-icon";

export default function ItemCart() {
  return (
    <div className="text-white m-2 text-sm font-medium">
      <Dropdown label={<CartIcon />} inline={true}>
        <div className="w-fit m-2">
          <Dropdown.Item>List Items: 3</Dropdown.Item>
          <hr />
          <Dropdown.Item>
            <Table hoverable={true}>
              <Table.Head className="bg-emerald-300">
                <Table.HeadCell>
                  <span className="sr-only">Image</span>
                </Table.HeadCell>
                <Table.HeadCell>Product Name</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">View Product</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white hover:bg-opacity-90">
                  <Table.Cell>
                    <Image src="/images/product1.jpg" alt="product1" width={60} height={60} />
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple MacBook Pro 17</Table.Cell>
                  <Table.Cell>
                    <a href="/tables" className="font-medium text-rose-400 hover:underline dark:text-blue-50 ">
                      Proceed to Pay
                    </a>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white hover:bg-opacity-90">
                  <Table.Cell>
                    <Image src="/images/product1.jpg" alt="product1" width={60} height={60} />
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple MacBook Pro 17</Table.Cell>
                  <Table.Cell>
                    <a href="/tables" className="font-medium text-rose-400 hover:underline dark:text-blue-50 ">
                      Proceed to Pay
                    </a>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white hover:bg-opacity-90">
                  <Table.Cell>
                    <Image src="/images/product1.jpg" alt="product1" width={60} height={60} />
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple MacBook Pro 17</Table.Cell>
                  <Table.Cell>
                    <a href="/tables" className="font-medium text-rose-400 hover:underline dark:text-blue-50 ">
                      Proceed to Pay
                    </a>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Dropdown.Item>
        </div>
      </Dropdown>
    </div>
  );
}
