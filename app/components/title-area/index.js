import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles';


class Title extends React.Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        className: React.PropTypes.string,
    }

    render() {
        const { title, className } = this.props;

        return <div className={className}>
            <div styleName="title_content">
                <div styleName="title_area">
                    <h1 styleName="title_style">{title}</h1>
                </div>
            </div>
        </div>;
    }
}

export default CSSModules(styles)(Title);