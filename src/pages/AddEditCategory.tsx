import { Container, Row, Col, Button, FormControl, FormLabel } from "react-bootstrap";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory, selectCategory } from "../features/categorySlice";
import { addCategory, editCategory, deleteCategory } from "../services/categoryService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function AddEditCategory() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const category = useSelector(selectCategory);
    const [name, setName] = React.useState(category.category?.Name ?? "");
    const [errorName, setErrorName] = React.useState(false);
    const handleChange = ({ target: { value } }) => { setName(value); setErrorName(false); }

    function saveCategory() {
        if (name === "") {
            setErrorName(true);
        }
        else {
            let id = category.category?.Id ?? 0
            dispatch(changeCategory({ Id: id, Name: name }));
            if (id > 0) {
                editCategory(id, name).then((response) => {
                    if (response.status === 201 || response.status === 200) {
                        Swal.fire({
                            title: "Categoria salva com sucesso!",
                            icon: "success"
                        }).then(() =>
                            navigate('/categorias')
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
                addCategory(name).then((response) => {
                    if (response.status === 201 || response.status === 200) {
                        Swal.fire({
                            title: "Categoria salva com sucesso!",
                            icon: "success"
                        }).then(() =>
                            navigate('/categorias')
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

    function deleteCategoryId() {
        deleteCategory(category.category.Id).then((response) => {
            if (response.status === 201 || response.status === 200) {
                Swal.fire({
                    title: "Categoria deletada com sucesso!",
                    icon: "success"
                }).then(() =>
                    navigate('/categorias')
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


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h3>Cadastro de Categoria</h3>
                    </Col>
                    {category.category?.Id > 0 &&
                        <Col className="text-center">
                            <Button className="btn-danger" onClick={deleteCategoryId}>Excluir Categoria</Button>
                        </Col>
                    }

                </Row>
                <br/>
                <Row>
                    <Col>
                        <form>
                            <FormLabel>Nome</FormLabel>
                            <FormControl isInvalid={errorName} type="text" name="nome" defaultValue={name} required onChange={handleChange} />
                            <br />
                            <Button className="btn-dark" onClick={saveCategory}>Salvar</Button>
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

export default AddEditCategory;