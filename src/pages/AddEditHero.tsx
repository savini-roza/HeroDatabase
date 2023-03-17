import React from "react";
import { Container, Row, Col, Button, FormControl, FormLabel, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeHero, selectHero } from "../features/heroSlice";
import { selectCategoriesList } from "../features/categoriesListSlice";
import { addHero, deleteHero, editHero } from "../services/heroService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function AddEditHero() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const hero = useSelector(selectHero);
    const categories = useSelector(selectCategoriesList);
    const [name, setName] = React.useState(hero.hero?.Name ?? "");
    const [categoryId, setCategoryId] = React.useState(hero.hero?.CategoryId ?? 0);
    const [active, setActive] = React.useState(hero.hero?.Active ?? false);
    const [errorName, setErrorName] = React.useState(false);
    const [errorCategory, setErrorCategory] = React.useState(false);

    function saveHero() {
        if (name === "") {
            setErrorName(true);
        }
        if (categoryId === 0) {
            setErrorCategory(true);
        }
        if (name !== "" && categoryId > 0) {
            let id = hero.hero?.Id ?? 0
            dispatch(changeHero({ Id: id, Name: name, CategoryId: categoryId, Active: active }));
            if (id > 0) {
                editHero(id, name, categoryId, active).then((response) => {
                    if (response.status === 201 || response.status === 200) {
                        Swal.fire({
                            title: "Herói salvo com sucesso!",
                            icon: "success"

                        }).then(() =>
                            navigate('/herois')
                        );
                    }
                    else {
                        Swal.fire({
                            title: "Ops, aconteceu algo de errado!",
                            icon: "error"
                        });
                    }
                });
            }
            else {
                addHero(name, categoryId, active).then((response) => {
                    if (response.status === 201 || response.status === 200) {
                        Swal.fire({
                            title: "Herói salvo com sucesso!",
                            icon: "success"
                        }).then(() =>
                            navigate('/herois')
                        );
                    }
                    else {
                        Swal.fire({
                            title: "Ops, aconteceu algo de errado!",
                            icon: "error"
                        });
                    }
                });
            }
        }
    }

    function deleteHeroId() {
        deleteHero(hero.hero.Id).then((response) => {
            if (response.status === 201 || response.status === 200) {
                Swal.fire({
                    title: "Herói deletado com sucesso!",
                    icon: "success"
                }).then(() =>
                    navigate('/herois')
                );
            }
            else {
                Swal.fire({
                    title: "Ops, aconteceu algo de errado!",
                    icon: "error"
                });
            }
        });
    }

    let listaCategorias = categories.categoriesList?.map(category => (
        <option key={category.Id} value={category.Id}>{category.Name}</option>
    ));

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h3>Cadastro de Herói</h3>
                    </Col>
                    {hero.hero?.Id > 0 &&
                        <Col className="text-center">
                            <Button className="btn-danger" onClick={deleteHeroId}>Excluir Herói</Button>
                        </Col>
                    }
                </Row>
                <br/>
                <Row>
                    <Col>
                        <form>
                            <FormLabel>Nome</FormLabel>
                            <FormControl type="text" isInvalid={errorName} name="nome" defaultValue={name} required onChange={(e) => { setName(e.target.value); setErrorName(false) }} />
                            <br />
                            <FormLabel>Categoria</FormLabel>
                            <Form.Select isInvalid={errorCategory} defaultValue={categoryId} onChange={(e) => { setCategoryId(e.target.value); setErrorCategory(false); }}>
                                <option disabled value={0}>Selecione</option>
                                {listaCategorias}
                            </Form.Select>
                            <br />
                            <Form.Check type="switch" defaultChecked={active} onChange={(e) => setActive(e.target.checked)} label="Este herói está ativo" />
                            <br />
                            <Button className="btn-dark" onClick={saveHero}>Salvar</Button>
                        </form>
                    </Col>
                    <Col>
                        &nbsp;
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AddEditHero;