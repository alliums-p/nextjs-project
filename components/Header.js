import headerStyles from '../styles/Header.module.css';

const Header = () => {
    // const x = 2;

    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span> News
            </h1>

            <p className={headerStyles.description}>
                Get latest news on Web development and Blockchain technology
            </p>

            {/* Conditional styles */}
            {/* <style jsx>
                {`
                    .title {
                        color: ${ x > 3 ? "red" : "blue"}
                    }
                `}
            </style> */}
        </div>
    );
};

export default Header;
