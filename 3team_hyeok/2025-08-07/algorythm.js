function solution(lines) {
  let points = [];
  for (let [start, end] of lines) {
    points.push([start, "start"]);
    points.push([end, "end"]);
  }

  let overlap = 0;
  let prev = null;
  let total = 0;

  points.sort((a, b) => a[0] - b[0]);

  for (let [x, type] of points) {
    if (prev !== null && 2 <= overlap) {
      total += x - prev;
    }

    if (type === "start") {
      overlap++;
    } else {
      overlap--;
    }

    prev = x;
  }

  return total;
}

// ========================================

function solution(lines) {
  let line = Array(201).fill(0);

  for (let [start, end] of lines) {
    for (let i = start; i < end; i++) {
      line[i + 100] += 1;
    }
  }

  return line.filter((n) => 2 <= n).length;
}
