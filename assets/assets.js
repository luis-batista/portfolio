import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import nodejs from './nodejs.jpg';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import python from './python.png';
import js from './js.png';
import typescript from './typescript.png';
import html_icon from './html_icon.png';
import css_icon from './css_icon.png';
import tailwindcss from './tailwindcss.jpg';
import reactjs from './reactjs.jpg';
import nextjs from './nextjs.jpg';
import react_native from './react_native.jpg';

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/portfolio' : '';

export const assets = {
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    nodejs,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    python,
    js,
    typescript,
    html_icon,
    css_icon,
    tailwindcss,
    reactjs,
    nextjs,
    react_native
};

export const workData = [
    {
        title: 'Sistema de atendimento',
        description: 'HTML | CSS | Appscript | Bootstrap',
        bgImage: `${basePath}/work-1.png`,
        longDescription: `Sistema desenvolvido para gerenciamento de atendimentos e pacientes durante minha trajetória na Colaborativa Tecnologia.

        As funcionalidades deste sistema incluem:

        - Cadastro e agendamento de horários;
        - Confirmação de agendamento;
        - Consulta e atualização de informações;
        - Envio automático de prontuário;
        - Envio automático de localização do consultório.`,
    },
    {
        title: 'Segurança da informação',
        description: 'Google Workspace',
        bgImage: '/work-2.png',
        longDescription: `Projeto customizado com o objetivo de implementar controles de compliance e segurança da informação na plataforma Google Workspace.
        
        Este projeto consiste em:
        
        - Relatório de avaliação de segurança;
        - Definição de Política de Segurança da Informação;
        - Aplicação de controles de segurança;
        - Treinamento de usuários.`,
    },
    {
        title: 'Intranet corporativa',
        description: 'HTML | CSS | Google Sites',
        bgImage: '/work-3.png',
        longDescription: `Projeto desenvolvido para promover a comunicação, impulsionar a colaboração e aprimorar a organização dos processos internos, resultando em maior produtividade.
        
        O objetivo desta intranet é:

        - Comunicação;
        - Interação e colaboração;
        - Produtividade e inovação;
        - Organização de processos internos.`,

    },
    // {
    //     title: 'UI/UX designing',
    //     description: 'UI/UX Design',
    //     bgImage: '/work-4.png',
    // },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Formação', description: 'Engenharia da Computação - UERJ' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Soft Skills', description: 'Comunicação eficaz, Trabalho em equipe, Resolução de problemas, Adaptabilidade.' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projetos', description: 'Sistema de atendimento, Segurança da informação, Intranet corporativa.' }
];

export const toolsData = [
    assets.html_icon, assets.css_icon, assets.js, assets.typescript, assets.tailwindcss, assets.reactjs, assets.nextjs, assets.react_native, assets.nodejs, assets.mongodb, assets.git, assets.python
];