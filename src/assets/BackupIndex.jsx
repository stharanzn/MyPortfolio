import React from 'react';
import {
    AppBar,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    IconButton,
    LinearProgress,
    TextField,
    Toolbar,
    Typography,
    useTheme,
    ThemeProvider,
    createTheme,
    CssBaseline,
    Avatar
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ComputerIcon from '@mui/icons-material/Computer';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

// Custom theme
const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#9c57ff',
        },
        secondary: {
            main: '#ff57b5',
        },
        background: {
            default: '#0A0E1A',
            paper: '#131A2D',
        },
    },
    typography: {
        fontFamily: "'Rajdhani', 'Roboto', 'Arial', sans-serif",
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 700,
        },
        h3: {
            fontWeight: 700,
        },
        h4: {
            fontWeight: 600,
        },
        h5: {
            fontWeight: 600,
        },
        h6: {
            fontWeight: 600,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 600,
                    padding: '10px 24px',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    backgroundImage: 'linear-gradient(180deg, rgba(30, 40, 70, 0.4) 0%, rgba(20, 30, 60, 0.2) 100%)',
                    backdropFilter: 'blur(5px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 8,
                        backgroundColor: 'rgba(15, 25, 50, 0.5)',
                    },
                },
            },
        },
    },
});

// Custom styled components
const StatsCounter = ({ value, label }) => (
    <Box textAlign="center" sx={{ mb: 4 }}>
        <Typography variant="h2" fontWeight="bold" sx={{ mb: 1 }}>
            {value}
        </Typography>
        <Typography variant="body1" color="text.secondary">
            {label}
        </Typography>
    </Box>
);

const SkillBar = ({ skill, value }) => (
    <Box sx={{ mb: 3 }}>
        <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography variant="body1">{skill}</Typography>
            <Typography variant="body1">{value}%</Typography>
        </Box>
        <LinearProgress
            variant="determinate"
            value={value}
            sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '& .MuiLinearProgress-bar': {
                    backgroundColor: theme.palette.primary.main,
                },
            }}
        />
    </Box>
);

const ServiceCard = ({ icon, title }) => {
    const Icon = icon;
    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', py: 4 }}>
                <Icon color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6" align="center">
                    {title}
                </Typography>
            </Card>
        </Grid>
    );
};

const ProjectCard = ({ title, description, tags, type }) => (
    <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{
                position: 'relative',
                backgroundColor: type === 'RPG' ? '#9c57ff' : type === 'Puzzle' ? '#577fff' : '#ff57b5',
                borderRadius: '8px',
                width: 'fit-content',
                px: 1.5,
                py: 0.5,
                m: 2,
                position: 'absolute',
                zIndex: 10,
            }}>
                <Typography variant="body2" fontWeight="bold">
                    {type}
                </Typography>
            </Box>
            <Box
                sx={{
                    height: 200,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: type === 'RPG' ? 'linear-gradient(135deg, #9c57ff 0%, #6d3db3 100%)' :
                        type === 'Puzzle' ? 'linear-gradient(135deg, #577fff 0%, #3d57b3 100%)' :
                            'linear-gradient(135deg, #ff57b5 0%, #b33d7a 100%)',
                    position: 'relative',
                }}
            >
                <IconButton
                    sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.5)' }
                    }}
                >
                    <PlayArrowIcon sx={{ fontSize: 40 }} />
                </IconButton>
            </Box>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                    {description}
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1} mt={2}>
                    {tags.map((tag, index) => (
                        <Typography
                            key={index}
                            variant="caption"
                            sx={{
                                backgroundColor: 'rgba(156, 87, 255, 0.2)',
                                color: '#9c57ff',
                                px: 1.5,
                                py: 0.5,
                                borderRadius: 4,
                                display: 'inline-block'
                            }}
                        >
                            {tag}
                        </Typography>
                    ))}
                </Box>
                <Button
                    variant="text"
                    color="primary"
                    sx={{ mt: 2, p: 0, fontWeight: 'bold' }}
                >
                    View Details &gt;
                </Button>
            </CardContent>
        </Card>
    </Grid>
);

// Main component
function BackupApp() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{
                minHeight: '100vh',
                backgroundColor: 'background.default',
                backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(156, 87, 255, 0.1), transparent 25%), radial-gradient(circle at 85% 30%, rgba(255, 87, 181, 0.08), transparent 25%)',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat'
            }}>
                {/* Header */}
                <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <Container>
                        <Toolbar disableGutters>
                            <IconButton edge="start" color="primary" aria-label="back" sx={{ mr: 2, backgroundColor: 'rgba(156, 87, 255, 0.2)' }}>
                                <ArrowBackIcon />
                            </IconButton>
                            <Typography variant="h5" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                                <Box component="span" fontWeight="bold">ALEX GAME</Box>
                                <Box component="span" color="primary.main" fontWeight="bold">DEV</Box>
                            </Typography>
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                                <Button color="inherit">Home</Button>
                                <Button color="inherit">Projects</Button>
                                <Button color="inherit">Skills</Button>
                                <Button color="inherit">About</Button>
                                <Button color="inherit">Contact</Button>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>

                {/* Hero Section */}
                <Container sx={{ mt: 8, mb: 12 }}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <Typography variant="h1" component="h1"
                                        sx={{
                                            mb: 3,
                                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                                            lineHeight: 1.2,
                                        }}>
                                Game Developer &<br />
                                <Box component="span" color="primary.main">Interactive</Box> Designer
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', color: 'text.secondary', maxWidth: '80%' }}>
                                Crafting immersive gaming experiences with cutting-edge technology and creative storytelling. Turning ideas into playable realities.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2, mb: 6 }}>
                                <Button variant="contained" color="primary" size="large">
                                    View Projects
                                </Button>
                                <Button variant="outlined" color="primary" size="large">
                                    Get In Touch
                                </Button>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                <Typography variant="body2" color="text.secondary">
                                    Trusted by
                                </Typography>
                                <Box display="flex">
                                    {[1, 2, 3].map((i) => (
                                        <Avatar
                                            key={i}
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                backgroundColor: 'primary.main',
                                                opacity: 0.7,
                                                ml: i > 1 ? -1 : 0,
                                                border: '2px solid #0A0E1A'
                                            }}
                                        />
                                    ))}
                                </Box>
                                <Typography variant="body2" fontWeight="medium">
                                    Top Game Studios
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box
                                sx={{
                                    backgroundColor: 'rgba(30, 40, 70, 0.3)',
                                    borderRadius: 4,
                                    p: 4,
                                    position: 'relative',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: -10,
                                        right: -10,
                                        width: 70,
                                        height: 70,
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(156, 87, 255, 0.1)',
                                        zIndex: -1
                                    }
                                }}
                            >
                                <Grid container spacing={3} sx={{ position: 'relative' }}>
                                    <Grid item xs={4}>
                                        <Box sx={{ position: 'absolute', top: -30, right: -10 }}>
                                            <IconButton sx={{ backgroundColor: 'rgba(156, 87, 255, 0.2)', color: 'primary.main' }}>
                                                <PlayArrowIcon />
                                            </IconButton>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sx={{ height: 240, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Box
                                            sx={{
                                                width: '70%',
                                                height: '70%',
                                                backgroundColor: 'primary.main',
                                                borderRadius: '50%',
                                                opacity: 0.7,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <PlayArrowIcon sx={{ fontSize: 80, color: 'white' }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                {/* Stats Section */}
                <Container sx={{ my: 8 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={6} sm={3}>
                            <StatsCounter value="10+" label="Games Shipped" />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <StatsCounter value="5M+" label="Downloads" />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <StatsCounter value="8+" label="Years Experience" />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <StatsCounter value="15+" label="Happy Clients" />
                        </Grid>
                    </Grid>
                </Container>

                {/* Projects Section */}
                <Container sx={{ my: 12 }}>
                    <Box sx={{ mb: 6, textAlign: 'center' }}>
                        <Typography variant="h2"
                                    sx={{
                                        mb: 2,
                                        '& .highlight': {
                                            color: 'primary.main'
                                        }
                                    }}>
                            Featured <span className="highlight">Projects</span>
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
                            Explore my portfolio of games and interactive experiences that push the boundaries of gameplay and storytelling.
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        <ProjectCard
                            type="RPG"
                            title="Cosmic Odyssey"
                            description="A space exploration RPG with procedurally generated planets and an epic storyline spanning multiple galaxies."
                            tags={['Unity', 'C#', '3D']}
                        />
                        <ProjectCard
                            type="Puzzle"
                            title="Chrono Shift"
                            description="A mind-bending puzzle game where players manipulate time to solve increasingly complex challenges."
                            tags={['Unreal Engine', 'C++', '2D']}
                        />
                        <ProjectCard
                            type="Action"
                            title="Shadow Legends"
                            description="A fast-paced action game with stealth mechanics and a dark, atmospheric world to explore."
                            tags={['Godot', 'GDScript', '2.5D']}
                        />
                    </Grid>

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                        <Button variant="outlined" color="primary">
                            No More Projects
                        </Button>
                    </Box>
                </Container>

                {/* Skills Section */}
                <Container sx={{ my: 12 }}>
                    <Box sx={{ mb: 6, textAlign: 'center' }}>
                        <Typography variant="h2"
                                    sx={{
                                        mb: 2,
                                        '& .highlight': {
                                            color: 'primary.main'
                                        }
                                    }}>
                            Technical <span className="highlight">Skills</span>
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
                            My expertise spans across various game development technologies and programming languages.
                        </Typography>
                    </Box>

                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" sx={{ mb: 3 }}>Development</Typography>
                            <SkillBar skill="Unity" value={95} />
                            <SkillBar skill="Unreal Engine" value={85} />
                            <SkillBar skill="Godot" value={75} />
                            <SkillBar skill="C#" value={90} />
                            <SkillBar skill="C++" value={80} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" sx={{ mb: 3 }}>Design & Other</Typography>
                            <SkillBar skill="Game Design" value={90} />
                            <SkillBar skill="3D Modeling" value={70} />
                            <SkillBar skill="Animation" value={65} />
                            <SkillBar skill="UI/UX Design" value={85} />
                            <SkillBar skill="Project Management" value={80} />
                        </Grid>
                    </Grid>

                    <Grid container spacing={3} sx={{ mt: 4 }}>
                        <ServiceCard icon={ComputerIcon} title="Game Development" />
                        <ServiceCard icon={ImageIcon} title="3D Modeling" />
                        <ServiceCard icon={VideocamIcon} title="Animation" />
                        <ServiceCard icon={SmartphoneIcon} title="Mobile Development" />
                    </Grid>
                </Container>

                {/* About Section */}
                <Container sx={{ my: 12 }}>
                    <Box sx={{ mb: 6, textAlign: 'center' }}>
                        <Typography variant="h2"
                                    sx={{
                                        mb: 2,
                                        '& .highlight': {
                                            color: 'primary.main'
                                        }
                                    }}>
                            About <span className="highlight">Me</span>
                        </Typography>
                    </Box>

                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={4}>
                            <Box sx={{
                                width: '100%',
                                borderRadius: '50%',
                                backgroundColor: 'primary.main',
                                paddingTop: '100%',
                                position: 'relative',
                                opacity: 0.8
                            }}>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '10%',
                                        left: '10%',
                                        width: '80%',
                                        height: '80%',
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(156, 87, 255, 0.3)'
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography paragraph>
                                I'm Alex, a passionate game developer with over 8 years of experience creating immersive and engaging gaming experiences. My journey in game development began with a fascination for interactive storytelling and has evolved into a career crafting worlds that players love to explore.
                            </Typography>
                            <Typography paragraph>
                                I specialize in Unity and Unreal Engine development, with a strong background in both 2D and 3D game creation. My approach combines technical expertise with creative vision to deliver games that are not only fun to play but also visually stunning.
                            </Typography>
                            <Typography paragraph>
                                When I'm not coding or designing games, you can find me exploring the latest gaming trends, participating in game jams, or mentoring aspiring game developers.
                            </Typography>

                            <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                                <Button variant="contained" color="primary">
                                    Get In Touch
                                </Button>
                                <Button variant="outlined" color="primary">
                                    Download Resume
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                {/* Contact Section */}
                <Container sx={{ my: 12 }}>
                    <Box sx={{ mb: 6, textAlign: 'center' }}>
                        <Typography variant="h2"
                                    sx={{
                                        mb: 2,
                                        '& .highlight': {
                                            color: 'primary.main'
                                        }
                                    }}>
                            Get In <span className="highlight">Touch</span>
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
                            Have a project in mind or want to collaborate? I'd love to hear from you!
                        </Typography>
                    </Box>

                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <Card sx={{ p: 3 }}>
                                <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
                                    Send Me a Message
                                </Typography>
                                <Box component="form" noValidate>
                                    <Box sx={{ mb: 3 }}>
                                        <Typography variant="body2" sx={{ mb: 1 }}>Your Name</Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="John Doe"
                                            variant="outlined"
                                            size="small"
                                        />
                                    </Box>
                                    <Box sx={{ mb: 3 }}>
                                        <Typography variant="body2" sx={{ mb: 1 }}>Email Address</Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="john@example.com"
                                            variant="outlined"
                                            size="small"
                                        />
                                    </Box>
                                    <Box sx={{ mb: 3 }}>
                                        <Typography variant="body2" sx={{ mb: 1 }}>Subject</Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="Project Inquiry"
                                            variant="outlined"
                                            size="small"
                                        />
                                    </Box>
                                    <Box sx={{ mb: 3 }}>
                                        <Typography variant="body2" sx={{ mb: 1 }}>Message</Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="Tell me about your project..."
                                            variant="outlined"
                                            multiline
                                            rows={4}
                                        />
                                    </Box>
                                    <Button variant="contained" color="primary" fullWidth size="large">
                                        Send Message
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
                                Contact Information
                            </Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <Box sx={{
                                    mr: 2,
                                    backgroundColor: 'rgba(156, 87, 255, 0.1)',
                                    width: 50,
                                    height: 50,
                                    borderRadius: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <EmailIcon color="primary" />
                                </Box>
                                <Box>
                                    <Typography variant="body1">Email</Typography>
                                    <Typography variant="body2" color="text.secondary">alex@gamedev.com</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <Box sx={{
                                    mr: 2,
                                    backgroundColor: 'rgba(156, 87, 255, 0.1)',
                                    width: 50,
                                    height: 50,
                                    borderRadius: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <PhoneIcon color="primary" />
                                </Box>
                                <Box>
                                    <Typography variant="body1">Phone</Typography>
                                    <Typography variant="body2" color="text.secondary">+1 (555) 123-4567</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 5 }}>
                                <Box sx={{
                                    mr: 2,
                                    backgroundColor: 'rgba(156, 87, 255, 0.1)',
                                    width: 50,
                                    height: 50,
                                    borderRadius: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <LocationOnIcon color="primary" />
                                </Box>
                                <Box>
                                    <Typography variant="body1">Location</Typography>
                                    <Typography variant="body2" color="text.secondary">San Francisco, California</Typography>
                                </Box>
                            </Box>

                            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
                                Follow Me
                            </Typography>

                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <IconButton aria-label="Twitter" sx={{
                                    borderRadius: 2,
                                    border: '1px solid rgba(255, 255, 255, 0.1)'
                                }}>
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton aria-label="Instagram" sx={{
                                    borderRadius: 2,
                                    border: '1px solid rgba(255, 255, 255, 0.1)'
                                }}>
                                    <InstagramIcon />
                                </IconButton>
                                <IconButton aria-label="LinkedIn" sx={{
                                    borderRadius: 2,
                                    border: '1px solid rgba(255, 255, 255, 0.1)'
                                }}>
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton aria-label="GitHub" sx={{
                                    borderRadius: 2,
                                    border: '1px solid rgba(255, 255, 255, 0.1)'
                                }}>
                                    <GitHubIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                {/* Footer */}
                <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', py: 4, mt: 8 }}>
                    <Container>
                        <Typography variant="body2" color="text.secondary" align="center">
                            © 2025 Alex GameDev. All rights reserved.
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default BackupApp;