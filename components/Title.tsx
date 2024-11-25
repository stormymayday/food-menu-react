interface TitleProps {
    text: string;
}

function Title({ text }: TitleProps) {
    return (
        <div className="title">
            <h2>{text || "Default Title"}</h2>
            <div className="title-underline"></div>
        </div>
    );
}
export default Title;
