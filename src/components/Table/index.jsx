import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import Btn from "../inputs/Btn";

export default function TodoListTable({ list, setedit, deleteTodo }) {
  return (
    <Container className="mt-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S. No</th>
            <th>Todo Title</th>
            <th>Todo Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.length !== 0 ? (
            list?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <Btn
                      variant="info"
                      onClick={() => setedit(item)}
                      name="Edit"
                      className="mx-3"
                    />

                    <Btn
                      variant="danger"
                      onClick={() => deleteTodo(item)}
                      name="Delete"
                    />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5} className="text-center">
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}
