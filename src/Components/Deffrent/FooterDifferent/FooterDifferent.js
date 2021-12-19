import React from 'react';
import './FooterDifferent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';


const FooterDifferent = () => {
    return (
        <section className=" container mt-5 pt-4">
        <main className=" different-footer text-center">
            <small className="text-white "> Designed & Built by
                <a className="link-git mx-1 text-decoration-none" target="_blank" href="https://github.com/   shakil232">
                    Mohammad Shakil Ahmed
                </a> 
            </small>

            {/* footer-text-area */}
            <div className="mt-2">
                <small className="text-white mr-2 ">
                    <FontAwesomeIcon icon={faStar} /> Star
                </small>

                <small className="text-white ml-1 ">&</small>

                <small className="text-white ml-3 ">
                    <FontAwesomeIcon icon={faCodeBranch} /> Froks
                </small>

                <a className="text-decoration-none " href="https://github.com/shakil232" target="_blank">
                    <small className="text-white ml-3 badge bg-success">  By Me </small>
                </a>
            </div>

        </main>
    </section>
    );
};

export default FooterDifferent;