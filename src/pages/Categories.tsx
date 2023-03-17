import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeCategoriesList, selectCategoriesList } from "../features/categoriesListSlice";
import { getCategories } from "../services/categoryService";
import { Link, useNavigate } from "react-router-dom";
import { changeCategory } from "../features/categorySlice";

function Categories() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const categories = useSelector(selectCategoriesList);


    React.useEffect(() => {
        getCategories().then((response) => {
            dispatch(changeCategoriesList(response.data));
        })
    }, [])

    function editCategory(category) {
        dispatch(changeCategory(category));
        navigate('/novaCategoria')
    }

    let categoriesList = categories.categoriesList?.map((category) => (
        <TableRow key={category.Id}>
            <TableCell sx={{ color: 'background.default'}}>{category.Name}</TableCell>
            <TableCell sx={{ color: 'background.default'}}><Button className="btn-dark" onClick={() => editCategory(category)}>Detalhes</Button></TableCell>
        </TableRow>
    ))

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Link to="/novaCategoria"><Button className="btn-dark" onClick={() => editCategory({})}>Nova Categoria</Button></Link>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <TableContainer className="custom-table-container">
                            <Table>
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: 'background.default'}}>
                                        <TableCell>
                                            Nome
                                        </TableCell>
                                        <TableCell>
                                            Detalhes
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {categoriesList}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Categories;