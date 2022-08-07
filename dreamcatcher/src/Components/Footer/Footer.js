import React, { PureComponent } from 'react'

export default class Footer extends PureComponent {
    render() {
        return (

            <footer class="page-footer font-small blue pt-4">
                <div class="container-fluid text-center text-md-left">
                    <div class="column">
                       
                        <hr class="clearfix w-100 d-md-none pb-3" />
                        <div class="col-md-3 mb-md-0 mb-3">
                            <h5 class="text-uppercase"></h5>

                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!">About Us</a>
                                </li>
                                <li>
                                    <a href="#!">Careers</a>
                                </li>
                                <li>
                                    <a href="#!">Success Stories</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright text-center py-3">DreamTraders © 2022</div>
            </footer>

        )
    }
}
