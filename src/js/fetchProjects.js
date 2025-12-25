export async function fetchProjects() {
    const res = await fetch(
        'https://xiaonan.nl/wp-json/wp/v2/projects-2026?acf_format=standard',
    );

    return res.json();
}
