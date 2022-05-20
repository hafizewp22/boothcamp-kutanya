import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ModalContainer.module.scss";

const ModalContainer = ({ show, children, isLoading, isCenter, NextComponent, nextProps, customOverlay, customContainer, onClose }) => {
    const [shouldRender, setRender] = useState(show);

    useEffect(() => {
        if (show) {
            setRender(true);
            document.body.style.overflow = "hidden";
        }
    }, [show]);

    const onTransitionEnd = () => {
        if (!show) {
            setRender(false);
            document.body.style.overflow = "auto";
            if (onClose) onClose();
        }
    };

    return (
        shouldRender && (
            <div className={styles.overlay} style={{ ...customOverlay, alignItems: isCenter && "center" }}>
                {isLoading && <div className={styles.progressbar} />}
                <main
                    className={styles.main_container}
                    style={{
                        ...customContainer,
                        opacity: !show && 0,
                        transform: !show && `scale(0.8)`,
                    }}
                    onTransitionEnd={onTransitionEnd}
                >
                    {NextComponent ? <NextComponent {...nextProps} /> : children}
                </main>
            </div>
        )
    );
};

ModalContainer.propTypes = {
    show: PropTypes.bool,
    children: PropTypes.node,
    isLoading: PropTypes.bool,
    isCenter: PropTypes.bool,
    customOverlay: PropTypes.object,
    customContainer: PropTypes.object,
    NextComponent: PropTypes.any,
    nextProps: PropTypes.object,
    onClose: PropTypes.func,
};

export default ModalContainer;
