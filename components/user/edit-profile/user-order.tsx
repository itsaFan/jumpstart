import { Card, Table } from "flowbite-react";
import SettingCard from "./settings-card";

export default function UserOrderHistory() {
  return (
    <SettingCard>
      <Table className="mb-5">
        <Table.Head className="border border-b-2 border-t-0 border-x-0 border-black">
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Actions</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y ">
          <Table.Row className="bg-white ">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple MacBook Pro </Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a href="/tables" className="font-semibold text-rose-400 hover:underline ">
                Details
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Table className="mb-5">
        <Table.Head className="border border-b-2 border-t-0 border-x-0 border-black">
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Actions</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple MacBook Pro </Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a href="/tables" className="font-semibold text-rose-400 hover:underline ">
                Details
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Table className="mb-5">
        <Table.Head className="border border-b-2 border-t-0 border-x-0 border-black">
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Actions</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple MacBook Pro </Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a href="/tables" className="font-semibold text-rose-400 hover:underline ">
                Details
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      
      
    </SettingCard>
  );
}
