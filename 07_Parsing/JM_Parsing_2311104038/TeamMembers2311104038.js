const fs = require('fs');

class TeamMembers2311104038 {
    static ReadJSON() {
        try {
            // Baca file JSON
            const data = fs.readFileSync('./jurnal7_2_2311104038.json', 'utf8');
            // Parse JSON
            const obj = JSON.parse(data);

            console.log("Team member list:");
            obj.teamMembers.forEach(member => {
                console.log(`${member.nim} ${member.firstName} ${member.lastName} (${member.age} ${member.gender})`);
            });
        } catch (error) {
            console.error("Terjadi kesalahan saat membaca atau parsing file JSON:", error);
        }
    }
}

module.exports = TeamMembers2311104038;