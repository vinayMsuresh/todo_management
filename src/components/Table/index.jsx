import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import Btn from "../inputs/Btn";
import { ConfirmToast } from "react-confirm-toast";

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

                    <Button variant="danger">
                      <ConfirmToast
                        childrenClassName="margin-top-10"
                        customCancel="Reject"
                        customConfirm="Confirm"
                        customFunction={() => deleteTodo(item)}
                        message="Are you confirm to delete the todo?"
                        position="top-right"
                        showCloseIcon={true}
                        theme="lilac"
                      >
                        Delete
                      </ConfirmToast>
                    </Button>
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
