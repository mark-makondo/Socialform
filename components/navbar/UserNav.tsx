import { useState } from 'react';
import navbarStyle from '../../styles/components/navbar.module.scss';

// assets
import HomeIcon from '../../public/images/svg/house-fill.svg';
import WidgetIcon from '../../public/images/svg/app-indicator.svg';
import ConversationIcon from '../../public/images/svg/chat-left-dots-fill.svg';
import NotifacationIcon from '../../public/images/svg/bell-fill.svg';
import PersonIcon from '../../public/images/svg/person-fill.svg';
import SearchIcon from '../../public/images/svg/search.svg';

// components
import CircleIcon from '../CircleIcon';
import SpecialInput from '../form/SpecialInput';

const UserNav = () => {
    return (
        <>
            <SpecialInput attr={{ placeholder: 'Search & connect' }} SVG={<SearchIcon />} />

            <div role="navigation" className={navbarStyle.base__menu}>
                <CircleIcon SVG={<HomeIcon />} />
                <CircleIcon SVG={<WidgetIcon />} />
                <CircleIcon SVG={<ConversationIcon />} />
                <CircleIcon SVG={<NotifacationIcon />} />
                <CircleIcon SVG={<PersonIcon />} />
            </div>
        </>
    );
};

export default UserNav;
