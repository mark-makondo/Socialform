import circleIconStyle from '../styles/components/circle-icon.module.scss';

interface CircleIconProps {
    SVG: React.ReactElement;
    size?: 'small' | 'medium' | 'large';
}

const CircleIcon: React.FC<CircleIconProps> = ({ SVG, size = 'medium' }) => {
    return (
        <div className={`${circleIconStyle.base} ${circleIconStyle.base}--${size} `}>
            <div className={circleIconStyle['base-wrapper']}>{SVG}</div>
        </div>
    );
};

export default CircleIcon;
