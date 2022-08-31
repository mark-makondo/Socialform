import specialInputStyle from '../../styles/components/form/special-input.module.scss';

interface SpecialInputProps {
    attr?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    SVG?: React.ReactElement;
    label?: string;
    labelPos?: 'top' | 'inline-right' | 'inline-left';
}

const SpecialInput: React.FC<SpecialInputProps> = ({ attr = {}, SVG, label = '', labelPos = 'top' }) => {
    const isCheckbox = attr.type === 'checkbox';

    const checkboxDefStyle = {
        background: 'transparent',
        border: 'none',
        width: 'auto',
    };

    const determineLabelPosition = () => {
        let retVal = specialInputStyle['base--label-top'];

        switch (labelPos) {
            case 'top': {
                retVal = specialInputStyle['base--label-top'];
                break;
            }
            case 'inline-left': {
                retVal = specialInputStyle['base--label-inline-left'];
                break;
            }
            case 'inline-right': {
                retVal = specialInputStyle['base--label-inline-right'];
                break;
            }
            default: {
                retVal = specialInputStyle['base--label-top'];
                break;
            }
        }

        return retVal;
    };
    return (
        <div className={`${specialInputStyle.base} ${determineLabelPosition()}`}>
            {label && <label htmlFor={attr.name ? attr.name : ''}>{label}</label>}

            <div className={specialInputStyle.base__block} style={isCheckbox ? checkboxDefStyle : {}}>
                {SVG && <div>{SVG}</div>}
                <input {...attr} />
            </div>
        </div>
    );
};

export default SpecialInput;
