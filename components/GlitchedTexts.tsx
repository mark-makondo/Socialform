import glitchStyle from '../styles/components/glitched-text.module.scss';

interface GlichedTextsData {
    color?: string;
    label?: string;
}

interface GlitchedTextsProps {
    data?: GlichedTextsData[];
    fontFamily?: string;
    color?: string;
    position?: 'start' | 'center' | 'end';
}

/**
 * @author Mark Makondo
 * @source https://codepen.io/mattgrosswork/pen/VwprebG
 */
const GlitchedTexts: React.FC<GlitchedTextsProps> = ({
    data = [{ label: 'SAMPLE' }],
    fontFamily = '',
    color = '#fff',
    position = 'start',
}) => {
    const conditionalPosition = () => {
        let pos = 'flex-start';

        if (position === 'center') pos = position;
        else if (position === 'end') pos = 'flex-end';

        return pos;
    };

    return (
        <div className={glitchStyle.base} style={{ fontFamily, color, alignItems: conditionalPosition() }}>
            {data.map((val, i) => (
                <h2
                    key={i}
                    className={`hero glitch layers ${glitchStyle.base__container} ${glitchStyle['base__container--layers']} ${glitchStyle['base__container--glitch']} `}
                    data-text={val.label}
                >
                    <span style={{ color: val.color ? val.color : 'inherit' }}>{val.label}</span>
                </h2>
            ))}
        </div>
    );
};

export default GlitchedTexts;
