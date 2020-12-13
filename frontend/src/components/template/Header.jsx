import React from 'react';

//<!-- data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation" aqui embaixo-->


export default props =>
    <nav class="navbar navbar-dark bg-dark shadow-sm fixed-top" id="header">
        <div class="container d-flex justify-content-between">
            <div class="navbar-brand d-flex align-items-center">
                <strong>Vila Market</strong>
            </div>
            <button class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>