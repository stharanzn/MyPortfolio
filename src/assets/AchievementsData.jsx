import {Car, Gamepad2, Trophy} from "lucide-react";
import React from "react";

export const achievements = [
    {
        title: 'Finalist at NXP AiM',
        subtitle: 'Issued by Time of Sports',
        description:
            'Honored with the Best Car Model award and granted the prestigious opportunity to present an advanced car race simulation during the Grand Finals at the NXP Headquarters in Delhi, demonstrating exceptional innovation and engineering excellence.',
        date: 'September 2022',
        certLink: '',
        icon: (
            <Car/>
        ),
    },
    {
        title: 'Winner Of Game Jam',
        subtitle: 'VIT Bhopal Game Jam Season 1',
        description:
            "The VR and Gaming Club had hosted a game jam on the platform itch.io, in the month of August 2022, where the participants had to submit a game within a 7 day's time and the theme for the game jam was Speed.",
        date: 'September 2022',
        certLink: 'https://www.linkedin.com/posts/stharanzn_winner-of-vit-bhopal-game-jam-season-1-activity-6978700568844201984-GQ_q?utm_source=share&utm_medium=member_desktop&rcm=ACoAACZ3njMBu16qbOCSf85tnSVMkOimVecEEhc',
        icon: (
            <Gamepad2/>
        ),
    },
    {
        title: 'Hack GDSC Winners',
        subtitle: 'GDSC Club',
        description:
            'GDSC club had hosted a hackathon with various tracks like mobile app development, web development etc.\n' +
            'and we a group of three members, were the winners of the mobile app development track. Where we made an app named TourEzze, that was related to travel.',
        date: 'July 2022',
        certLink: '',
        icon: (
            <Trophy/>
        ),
    }
];