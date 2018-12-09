export const borderTop = pos => {
    switch(pos){
        case 0: return 'none';
        case 1: return 'none';
        default: return '10px solid white';
    }
};

export const borderBottom = (pos, len) => {
    switch(pos) {
        case (pos === len - 1 || pos === len - 2): return 'none';
        default: return '10px solid white';
    }
};

export const borderLeft = pos => {
    let check = pos % 2;
    switch(check) {
        case 0: return 'none';
        case 1: return '10px solid white';
        default: return;
    }
};

export const borderRight = pos => {
    let check = pos % 2;
    switch(check) {
        case 0: return '10px solid white';
        case 1: return 'none';
        default: return;
    }
};

export const leftPos = pos => {
    let check = pos % 2;
    switch(check) {
        case 0: return '0';
        default: return 'auto';
    }
};

export const rightPos = pos => {
    let check = pos % 2;
    switch(check) {
        case 1: return 0;
        default: return 'auto';
    }
};

export const topPos = (pos, len) => {
    if(pos === 0) {
        return 0;
    } else if(pos === 1) {
        return 0;
    } else if(pos === len - 1 || pos === len - 2) {
        return 'auto';
    } else {
        return '-15%';
    }
}

export const bottomPos = (pos, len) => {
    if(pos === len - 1) {
        return 0;
    } else if(pos === len - 2) {
        return 0;
    } else {
        return 'auto';
    }
}

