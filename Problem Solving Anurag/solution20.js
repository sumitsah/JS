const mediaTree = {
    name: "media",
    children: [
        {
            name: "images",
            children: [
                {
                    name: "events",
                    children: [
                        {
                            name: "birthday",
                            children: [
                                { name: "cake.png", children: [] },
                                { name: "party.jpg", children: [] },
                            ],
                        },
                    ],
                },
                {
                    name: "wallpapers",
                    children: [
                        { name: "nature.jpg", children: [] },
                        { name: "city.png", children: [] },
                    ],
                },
            ],
        },
        {
            name: "music",
            children: [
                {
                    name: "rock",
                    children: [{ name: "song1.mp3", children: [] }],
                },
            ],
        },
        {
            name: "videos",
            children: [],
        },
    ],
};

// 1️⃣ Print All Node Names in the Tree (Depth-First Order)
function printAllNodeNames(node, depth) {
    console.log(' '.repeat(depth) + node.name)
    for (let i = 0; i < node.children.length; i++) {
        printAllNodeNames(node.children[i], depth + 1)
    }
}

// printAllNodeNames(mediaTree, 0);

// 2️⃣ Count the Total Number of Nodes in the Tree

function countTreeNodes(node) {
    let count = 1;
    // debugger;
    for (const child of node.children) {
        count += countTreeNodes(child);
    }
    return count;
}

// console.log(countTreeNodes(mediaTree));

// 3️⃣ Print Only Leaf Nodes

function printOnlyLeafNodes(node) {
    if (node.children.length === 0) {
        console.log(node.name)
    }

    for (let child of node.children) {
        printOnlyLeafNodes(child)
    }

}

// printOnlyLeafNodes(mediaTree);

// 4️⃣ DOM: Print All Tag Names Inside
function printTreeNodeNames(node, depth = 0) {
    console.log(' '.repeat(depth) + node.localName)

    for (const child of node.children) {
        printTreeNodeNames(child, depth + 1);
    }
}

console.log(printTreeNodeNames(document.documentElement))

// 5️⃣ DOM: Count Total Number of Elements Inside
function countTreeNodesinDOM(node) {
    let count = 1;

    for (const child of node.children) {
        count += countTreeNodesinDOM(child);
    }
    return count;
}

console.log(countTreeNodesinDOM(document.documentElement))