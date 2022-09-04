import * as React from 'react';

interface Props {
    className?: string;
    size?: number;
}

export const ArrowDownIcon: React.FC<Props> = ({ className, size = 16 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            className={className}
            viewBox="0 0 16 16"
        >
            <path fill="currentColor" d="M13 4v2l-5 5-5-5V4l5 5z" />
        </svg>
    );
};
