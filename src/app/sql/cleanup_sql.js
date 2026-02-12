const fs = require('fs');
const path = 'c:\\Users\\ALIVELU\\Desktop\\devops-learning-website-main\\src\\app\\sql\\page.tsx';

try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n'); // Using \n to split, assuming LF or CRLF will be handled by split/join nicely or I should handle CRLF explicitely

    // We'll reconstruct the content
    let start1 = 2015;
    let end1 = 2169;
    let start2 = 2270;
    let end2 = 3483;

    const newLines = lines.filter((line, index) => {
        const lineNum = index + 1;
        // Check if line is within the ranges to delete
        if (lineNum >= start1 && lineNum <= end1) return false;
        if (lineNum >= start2 && lineNum <= end2) return false;
        return true;
    });

    const newContent = newLines.join('\n');
    fs.writeFileSync(path, newContent, 'utf8');
    console.log('Successfully cleaned up the file.');
    console.log(`Original line count: ${lines.length}`);
    console.log(`New line count: ${newLines.length}`);

} catch (err) {
    console.error('Error processing file:', err);
    process.exit(1);
}
