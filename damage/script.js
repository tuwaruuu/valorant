const damageData = {
    sheriff: { head: 159, body: 55, legs: 46 },
    phantom: { head: 156, body: 39, legs: 33 },
    outlaw: { head: 238, body: 140, legs: 119 },
    outlaw2: { head: 238, body: 140, legs: 118 },
    outlaw3: { head: 238, body: 140, legs: 117 },
    outlaw4: { head: 238, body: 140, legs: 116 },
    outlaw5: { head: 238, body: 140, legs: 115 },
    outlaw6: { head: 238, body: 140, legs: 114 },
    outlaw7: { head: 238, body: 140, legs: 113 },
};

const weaponSelect = document.getElementById('weaponSelect');
const damageDisplay = document.getElementById('damageDisplay');

function showDamage(part) {
    const weapon = weaponSelect.value;
    const damage = damageData[weapon][part];
    const partName = { head: "頭", body: "胴", legs: "足" }[part];
    damageDisplay.textContent = `${weaponSelect.options[weaponSelect.selectedIndex].text} の ${partName} ダメージ: ${damage}`;
}

document.querySelectorAll('.hitbox').forEach(box => {
    box.addEventListener('click', () => {
        showDamage(box.id);
    });
});
