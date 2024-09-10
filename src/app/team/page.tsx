"use client";
import { useState } from "react";
import { off } from "process";

const teamData = [
    {
        role: "FACT Coordinators",
        image: "fact-coords.jpg",
        officers: [
            {
                name: "Kristel Ong",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "kristel-ong.jpg",
            },
            {
                name: "Eillen Nigos",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "eillen-nigos.jpg",
            },
            {
                name: "Hahnbit Lee",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "hahnbit-lee.jpg",
            }
        ],
    },
    {
        role: "Treasurer",
        image: "treasurer.jpg",
        officers: [
            {
                name: "Maya Moloney",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "maya-moloney.jpg",
            }
        ]
    },
    {
        role: "Delegate",
        image: "delegate.jpg",
        officers: [
            {
                name: "Diane Alagaban",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "diane-alagaban.jpg",
            },
            {
                name: "Charlynne Ligo",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "charlynne-ligo.jpg",
            }
        ]
    },
    {
        role: "Hospitality",
        image: "hospitality.jpg",
        officers: [
            {
                name: "Catalina Sophia Murga",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "catalina-sophia-murga.jpg",
            },
            {
                name: "Grace Requeno",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "grace-requeno.jpg",
            }
        ]
    },
    {
        role: "Information Technology (IT)",
        image: "it.jpg",
        officers: [
            {
                name: "Emilia Daniels",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "emilia-daniels.jpg",
            },
            {
                name: "Kian De Guzman",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "kian-de-guzman.jpg",
            }
        ]
    },
    {
        role: "Marketing",
        image: "marketing.jpg",
        officers: [
            {
                name: "Kaila Babyar",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "kaila-babyar.jpg",
            },
            {
                name: "Lee Keating",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "lee-keating.jpg",
            },
            {
                name: "Miranda Espinoza",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "miranda-espinoza.jpg",
            }
        ]
    },
    {
        role: "Media",
        image: "media.jpg",
        officers: [
            {
                name: "Jamila Booc",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "jamila-booc.jpg",
            },
            {
                name: "Sofia Kanda",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "sofia-kanda.jpg",
            }
        ]
    },
    {
        role: "Palengke",
        image: "palengke.jpg",
        officers: [
            {
                name: "Michael Echavez",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "michael-echavez.jpg",
            },
            {
                name: "Ysabelle Pinpin",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "ysabelle-pinpin.jpg",
            }
        ]
    },
    {
        role: "Team FACT Managers",
        image: "team-fact-managers.jpg",
        officers: [
            {
                name: "Erien Lucero",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "erien-lucero.jpg",
            },
            {
                name: "Joshua Fajardo",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "joshua-fajardo.jpg",
            }
        ]
    },
    {
        role: "Variety Show",
        image: "variety-show.jpg",
        officers: [
            {
                name: "Adrian Isidoro",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "adrian-isidoro.jpg",
            },
            {
                name: "Stephanie Mago",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "stephanie-mago.jpg",
            }
        ]
    }
];

export default function Team() {
    return (
      <div>
        {teamData.map((role, index) => (
            <div key={index}>
                <img src={role.image} alt={``} />
                <h2>{role.role}</h2>
                <p>{role.officers.map(officer => (
                    officer.name + " "
                ))}
                </p>
            </div>
        ))}
      </div>
    );
}