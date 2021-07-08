import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddUser, GetALlUser } from "../Actions/UserAction";

export default function Form({ ...props }) {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.UserReducer);
  const { User } = userState;
  const [Values, setValues] = useState("");
  const [Name, setName] = useState();
  const [Prenom, setPrenom] = useState();
  const [Debut, setDebut] = useState();
  const [Fin, setFin] = useState();
  const [Price, setPrice] = useState();

  function Submit(e) {
    e.preventDefault();
    const user = {
      Name,
      Prenom,
      Debut,
      Fin,
      Price,
    };
    dispatch(AddUser(user));
    dispatch(GetALlUser());
  }

  useEffect(() => {
    if (props.currentId !== 0) {
      setValues(User.find((x) => x._id == props.currentId));
      setName(Values.name);
      setPrenom(Values.prenom);
      setDebut(Values.debut);
      setFin(Values.fin);
      setPrice(Values.price);
    }
  }, [props.currentId]);

  return (
    <>
      <div className="container">
        <form onSubmit={Submit}>
          <input
            type="text"
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="name"
            className="form-control mb-3"
          />

          <input
            type="text"
            placeholder="prenom"
            value={Prenom}
            onChange={(e) => {
              setPrenom(e.target.value);
            }}
            className="form-control mb-3"
          />

          <input
            type="time"
            placeholder="debut"
            value={Debut}
            onChange={(e) => {
              setDebut(e.target.value);
            }}
            className="form-control mb-3"
          />

          <input
            type="time"
            placeholder="fin"
            value={Fin}
            onChange={(e) => {
              setFin(e.target.value);
            }}
            className="form-control mb-3"
          />

          <input
            type="text"
            placeholder="price"
            value={Price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            className="form-control mb-3"
          />

          <button className="btn btn-success"> Valider</button>
        </form>
      </div>
    </>
  );
}
