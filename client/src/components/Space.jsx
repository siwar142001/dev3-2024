import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import './Spaces.css'

function Space({ space }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='row bs'>
            <div className="col-md-4">
                <img src={space.imageUrl[0]} className='smallimg' />
            </div>
            <div className="col-md-7">
                <h2>{space.titre}</h2>
                <b>
                    <p>Dimension : {space.dimension} m2</p>
                    <p>Catégorie : {space.categorie}</p>
                    <p>Prix : {space.prix}€</p>
                </b>
                <div style={{ float: 'right' }}>
                    <button className='btn btn-primary' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Détails</button>
                </div>

            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">{space.titre}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div id="carouselExample" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={space.imageUrl} class="d-block w-100" height={200} width={100} />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <p>{space.description}</p>
                            <p>{}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                            <button type="button" class="btn btn-primary">Reserver</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Space 