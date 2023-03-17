import React from "react";
import { getHeroes } from "../services/heroService";
import { useDispatch, useSelector } from "react-redux";
import { changeHeroesList, selectHeroesList } from "../features/heroesListSlice";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from "@mui/material";
import { getCategories } from "../services/categoryService";
import { changeCategoriesList, selectCategoriesList } from "../features/categoriesListSlice";
import { Link, useNavigate } from "react-router-dom";
import { changeHero } from "../features/heroSlice";

function Heroes() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const heroes = useSelector(selectHeroesList);
    const categories = useSelector(selectCategoriesList);


    React.useEffect(() => {
        getHeroes().then((response) => {
            dispatch(changeHeroesList(response.data));
        });

        getCategories().then((response) => {
            dispatch(changeCategoriesList(response.data));
        })
    }, [])

    function editHero(hero) {
        dispatch(changeHero(hero));
        navigate('/novoHeroi')
    }

    let heroesList = heroes.heroesList?.map((hero) => (
        <TableRow key={hero.Id}>
            <TableCell sx={{ color: 'background.default'}}>{hero.Name}</TableCell>
            <TableCell sx={{ color: 'background.default'}}>{categories.categoriesList?.find(x => x.Id === hero.CategoryId).Name || "Indefinido"}</TableCell>
            <TableCell sx={{ color: 'background.default'}}>{hero.Active ? "Ativo" : "Inativo"}</TableCell>
            <TableCell sx={{ color: 'background.default'}}><Button className="btn-dark" onClick={() => editHero(hero)}>Detalhes</Button></TableCell>
        </TableRow>
    ))

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Button className="btn-dark" onClick={() => editHero({})}>Novo Herói</Button>
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
                                            Categoria
                                        </TableCell>
                                        <TableCell>
                                            Ativo
                                        </TableCell>
                                        <TableCell>
                                            Detalhes
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {heroesList}
                                </TableBody>
                            </Table>
                        </TableContainer>   
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Heroes;