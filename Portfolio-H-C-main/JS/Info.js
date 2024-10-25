// Info.js file....
// skills.js file....
// projects.js file....

async function fetchLeetCodeStats() {

    try {
        // https://leetcode-api-faisalshohag.vercel.app/Saiki1212   .
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/Saiki1212');
        if (!response.ok) {
            throw new Error('Failed to fetch LeetCode statistics');
        }
        const data = await response.json();

        const leetCodeData = {
            easySolved: data.easySolved,
            mediumSolved: data.mediumSolved,
            hardSolved: data.hardSolved,
            totalSolved: data.totalSolved
        };

        const statsEvent = new CustomEvent('leetCodeStats', { detail: leetCodeData });
        document.dispatchEvent(statsEvent);

    } catch (error) {
        console.error('Error fetching LeetCode statistics:', error);
    }
}
fetchLeetCodeStats();

// Links of the External websites............

function redirectToLeetCode() {
    window.open('https://leetcode.com/u/AvnUxz8AOB/', '_blank');
}
function redirectToGithub() {
    window.open('https://github.com/vinay24112002', '_blank');
}
function redirectToLinkedIn() {
    window.open('https://www.linkedin.com/in/bommagani-vinay33/', '_blank');
}
function redirectToInstagram() {
    window.open('https://www.instagram.com/mr__chinna_official?igsh=MWVzdm5rbGVwc3pqdQ==', '_blank');
}

// skills.js.....

function redirectToJava() {
    window.open('https://www.java.com/en/', '_blank');
}
function redirectToCpp() {
    window.open('https://isocpp.org/', '_blank');
}
function redirectToJavaScript() {
    window.open('https://www.javascript.com/', '_blank');
}
function redirectToHtml() {
    window.open('https://html.spec.whatwg.org/', '_blank');
}
function redirectToCss() {
    window.open('https://www.w3.org/TR/CSS/#css', '_blank');
}
function redirectToMongoDB() {
    window.open('https://www.mongodb.com/docs/', '_blank');
}
function redirectToMysql() {
    window.open('https://www.mysql.com/', '_blank');
}
function redirectToNodeJS() {
    window.open('https://nodejs.org/en', '_blank');
}

// project.js......

function openMyProject(url) {
    window.open(url, '_blank');
}

// To Open my resume.....

function openResume() {
    const resumeUrl = './images/vinayr.pdf';
    window.open(resumeUrl, '_blank');
}
