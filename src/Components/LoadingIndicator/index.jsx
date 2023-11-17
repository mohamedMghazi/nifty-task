import "./style.scss";

export default function LoadingIndicator() {
    const dots = Array(3).fill(0).map((_, index) => ({ id: index }));

    return (
        <div className="loading-indicator">
            {dots.map((dot) => (<span key={dot} className="loading-dot" />))}
        </div>
    );
}
