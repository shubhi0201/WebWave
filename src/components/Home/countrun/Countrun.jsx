import { useState, useEffect } from "react";

const Countrun = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = target / (duration / 50);

        const interval = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(interval);
            } else {
                setCount(Math.ceil(start));
            }
        }, 50);

        return () => clearInterval(interval);
    }, [target, duration]);

    return (
        <span className="countstart">{count}</span>
    );
};

export default Countrun;
