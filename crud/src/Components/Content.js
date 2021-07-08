import React, { useEffect, Fragment, useState } from "react";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { GetALlUser, DeleteUser } from "../Actions/UserAction";

export default function Content() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);
  const userState = useSelector((state) => state.UserReducer);
  const { loading, User, payload } = userState;

  useEffect(() => {
    dispatch(GetALlUser());
  }, []);

  return (
    <>
      <h1>Content</h1>
      <div className="row">
        <div className="col-md-4">
          <h2> Form du contact</h2>
          <Form {...{ currentId, setCurrentId }} />
        </div>
        <div className="col-md-8">
          <h2> List du contact</h2>
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nom</th>
                  <th scope="col">Prenom</th>
                  <th scope="col">Debut</th>
                  <th scope="col">Fin</th>
                  <th scope="col">Price</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {User &&
                  User.map((user, index) => {
                    return (
                      <Fragment key={index}>
                        <tr>
                          <td>{user.name}</td>
                          <td>{user.prenom}</td>
                          <td>{user.debut}</td>
                          <td>{user.fin}</td>
                          <td>{user.price}</td>
                          <td>
                            <i
                              className="fa fa-edit"
                              onClick={() => setCurrentId(user._id)}
                            ></i>
                            <i
                              className="fa fa-trash m-2"
                              onClick={() => {
                                dispatch(DeleteUser(user._id));
                              }}
                            ></i>
                          </td>
                        </tr>
                      </Fragment>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
