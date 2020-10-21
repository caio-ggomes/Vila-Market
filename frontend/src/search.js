import React from 'react';

class Search extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            option: '',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({option: event.target.name});
    }

    render() {
        return(
            <div class="iza-container container">
                <div class="container container-categories-stripe mt-5 mb-4 category-section-margin-bottom">
                    <div class="row">
                        <div class="col-12 px-0 px-md-4">
                            <ul class="list-unstyled mb-0 list-inline category-stripe pb-3 category-stripe-margin-bottom">
                                <li class="list-inline-item">
                                    <div class="btn btn-outline-secondary" name="food" onClick={this.handleClick}>
                                        <span class="icon-background">
                                            <img src="food.png" style={{width:'64px', height:'64px'}} alt=""/>
                                        </span>
                                        <small>Comida</small>
                                    </div>
                                </li>
                                <li class="list-inline-item">
                                    <div class="btn btn-outline-secondary" name="service" onClick={this.handleClick}>
                                        <span class="icon-background">
                                            <img src="service.png" style={{width:'64px', height:'64px'}} alt=""/>
                                        </span>
                                        <small>Serviços</small>
                                    </div>
                                </li>
                                <li class="list-inline-item">
                                    <div class="btn btn-outline-secondary" name="blabla" onClick={this.handleClick}>
                                        <span class="icon-background">
                                            <img src="images/blabla.png" style={{width:'64px', height:'64px'}} alt=""/>
                                        </span>
                                        <small>BlaBla</small>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {this.state.option !== '' && <div class="my-3 p-3 bg-white rounded shadow-sm">OIEEE</div>}
            </div>
        );
    }

}

export default Search;