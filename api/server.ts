import express from 'express';
import cors from 'cors';
//import fs from "fs";

const app = express();
const port = 3000;


async function getProjects() {
    //const projectData = JSON.parse(fs.readFileSync('./data/projects.json', 'utf8'));
    //console.log(projectData);
    return [
        {
            "name": "Journey of the Robed",
            "description": "Journey of the Robed is an action-RPG with a huge focus on boss combat and spells. In Journey of the Robed, you move around in an open world. However, when entering a fight, you are sent to a platform-style place where you fight bosses and smaller enemies with spells you choose yourself.",
            "thumbnail_path": "Journey of the Robed.png",
            "id": 0
        }
    ];
}

// Enable CORS
app.use(cors());

// Create GET endpoint for projects
app.get('/api/projects', async (req, res) => {
    const projects = getProjects();
    res.setHeader('Content-Type', 'application/json');
    res.send(projects);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});