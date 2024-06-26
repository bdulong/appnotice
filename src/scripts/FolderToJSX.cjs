const fs = require("fs");
const path = require("path");

const dossiersPath = path.join(__dirname, "..", "dossiers");
const dossiersjsxPath = path.join(__dirname, "..", "components", "dossiers_jsx");

// Fonction pour formater le nom du dossier
const formatterNomDossier = (nomDossier) => {
  // Retirer tous les chiffres du nom
  let formateNom = nomDossier.replace(/\d+/g, '');
  // Retirer les tirets
  formateNom = formateNom.replace(/-/g, '');
  // Remplacer les underscores par des espaces
  formateNom = formateNom.replace(/_/g, ' ');
  return formateNom.trim(); // Retirer les espaces en début et fin de chaîne
};

// Fonction pour générer le contenu par défaut avec le nom du dossier et les sous-dossiers
const genererContenu = (nomDossier, sousDossiers) => {
    const sousDossiersHTML = sousDossiers
      .map((sd) => `<button className='CTA-notice'>${sd}</button>`)
      .join("\n")
      .replace(/\n/g, "\n\t\t\t\t\t"); // Ajout des tabulations pour les boutons
  
    return `import React from 'react'
import './dossiers_jsx-style.css'
import '../../App.css'
import Header from '../Header/header.jsx'
import CTALanguage from '../CTALanguage/CTALanguage.jsx'
  
const Page = () => {
    return (
        <main>
            <Header />
            <div className='content'>
                <h1>${nomDossier}</h1>
                <div className='CTA-container'>
                    ${sousDossiersHTML}
                </div>
            <CTALanguage />
            </div>
        </main>
    );
};

export default Page;
`;
};

// Vérifier les fichiers JSX existants dans le dossier dossiers_jsx
fs.readdir(dossiersjsxPath, (err, fichiersJSXExistants) => {
    if (err) {
        console.error('Erreur lors de la lecture du dossier "dossiers_jsx":', err);
        return;
    }

    // Convertir les noms des fichiers existants en un ensemble pour une recherche rapide
    const fichiersExistantSet = new Set(fichiersJSXExistants);

    // Lire le contenu du dossier dossiers
    fs.readdir(dossiersPath, (err, dossiers) => {
        if (err) {
            console.error('Erreur lors de la lecture du dossier "dossiers":', err);
            return;
        }

        dossiers.forEach((dossier) => {
            // Vérifier si le dossier commence par 2 chiffres
            if (!/^\d{2}/.test(dossier)) {
                console.log(`Le dossier "${dossier}" ne correspond pas au format attendu.`);
                return;
            }

            // Prendre les 8 premiers caractères du nom du dossier
            const nomFichierJSX = dossier.substring(0, 8) + ".jsx";
            const cheminFichierJSX = path.join(dossiersjsxPath, nomFichierJSX);

            // Vérifier si le fichier existe déjà dans dossiers_jsx
            if (fichiersExistantSet.has(nomFichierJSX)) {
                console.log(`Le fichier ${nomFichierJSX} existe déjà.`);
            } else {
                const dossierPath = path.join(dossiersPath, dossier);

                // Lire les sous-dossiers dans chaque dossier principal
                fs.readdir(dossierPath, (err, sousDossiers) => {
                    if (err) {
                        console.error(`Erreur lors de la lecture du dossier "${dossierPath}":`, err);
                        return;
                    }

                    // Formater le nom du dossier
                    const nomDossierFormate = formatterNomDossier(dossier);

                    // Générer le contenu avec le nom du dossier formaté et les sous-dossiers
                    const contenu = genererContenu(nomDossierFormate, sousDossiers);

                    // Créer un fichier avec le contenu généré
                    fs.writeFile(cheminFichierJSX, contenu, (err) => {
                        if (err) {
                            console.error(`Erreur lors de la création du fichier ${nomFichierJSX}:`, err);
                        } else {
                            console.log(`Fichier ${nomFichierJSX} créé avec succès.`);
                        }
                    });
                });
            }
        });
    });
});