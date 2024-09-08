"use client";
import PageContainer from "@/components/formatting/PageContainer";
import Image from "next/image";

const teamData = [
    {
        role: "FACT Coordinators",
        image: "fact-coords.jpg",
        officers: [
            {
                name: "Kristel Ong",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "kristel-ong.JPG",
            },
            {
                name: "Eillen Nigos",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "eillen-nigos.jpeg",
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
                image: "maya-moloney.jpeg",
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
                image: "charlynne-ligo.jpeg",
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
                image: "catalina-sophia-murga.jpeg",
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
                image: "kaila-babyar.jpeg",
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
                image: "miranda-espinoza.jpeg",
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
                image: "sofia-kanda.jpeg",
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
                image: "michael-echavez.jpeg",
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
                image: "erien-lucero.jpeg",
            },
            {
                name: "Joshua Fajardo",
                bio: "insert bio",
                pronouns: "insert pronouns",
                image: "joshua-fajardo.jpeg",
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
                image: "stephanie-mago.jpeg",
            }
        ]
    }
];

const OfficerCard = ({ name, image }) => {
    const IMG_WIDTH = 300;
    const IMG_HEIGHT = 450;
    return (
      <div style={{ display: 'block', margin: '2rem 4rem', padding: '0.5rem' }}>
        <Image
        src={`/public/team-fact/${image}`} alt={name}
        width={IMG_WIDTH} 
        height={IMG_HEIGHT}
        style={{ display: 'block', margin: '0 auto' }}
        />
        <p>{name}</p>
      </div>
    );
  };
  
  const OfficerRow = ({ role, officers }) => {
    return (
      <div>
        <h2 style={{ fontSize: '1.5vw' }}>{role}</h2>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          {officers.map((officer, index) => (
            <OfficerCard key={index} name={officer.name} image={officer.image} />
          ))}
        </div>
      </div>
    );
  };

export default function Team() {
    return (
        <PageContainer title="Team FACT 2024">
            <div style={{ textAlign: 'center' }}>
                {teamData.map((roleData, index) => (
                <OfficerRow key={index} role={roleData.role} officers={roleData.officers} />
                ))}
            </div>
        </PageContainer>    
    );
}