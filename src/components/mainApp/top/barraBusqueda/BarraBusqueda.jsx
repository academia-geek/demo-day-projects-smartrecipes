import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Yup from "yup";
import { resetSearchSync, searchAsync } from "../../../../redux/action/actionAdd";
import { SeachBarStyled } from "../../../../styles/styledComponents/SearchBarStyled";
const BarraBusqueda = () => {
  const dispatch = useDispatch();
  const { path } = useSelector((store) => store.funtional);
  const { activeLook } = useSelector((store) => store.add);
  const formatSearch = (searchBar) => {
    return searchBar
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  const formik = useFormik({
    initialValues: {
      searchBar: "",
    },
    validationSchema: Yup.object({
      searchBar: Yup.string(),
    }),
    onSubmit: ({ searchBar }) => {
      if (searchBar !== "") {
        dispatch(searchAsync(formatSearch(searchBar), path, activeLook));
      }
      dispatch(resetSearchSync());
    }
  });
  return (
    <SeachBarStyled fluid>
      <form onSubmit={formik.handleSubmit} className="searcForm">
          <label className="searchBar" htmlFor="searchBar">
            <input
              type="text"
              name="searchBar"
              onChange={formik.handleChange}
              placeholder="Busca verduras o recetas" />
          </label>
          <button type="submit" className="button">
            <img
              src="https://res.cloudinary.com/davidcharif/image/upload/v1647251188/sprint3-proyecto/search_rxhhm2.png"
              alt="magnifyng Glass"
            />
          </button>
      </form>
    </SeachBarStyled>
  );
};

export default BarraBusqueda;
