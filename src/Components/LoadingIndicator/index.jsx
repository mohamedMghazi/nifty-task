import "./style.scss";

export default function LoadingIndicator({ size = 10 }) {
    const dots = Array(3).fill(0).map((_, index) => (`${index}`));

    return (
        <div className="loading-indicator">
            {dots.map((dot) => (
                <span key={dot} className="loading-dot" style={{ width: `${size}px`, height: `${size}px` }} />
            ))}
        </div>
    );
}
