google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawChart);
      window.addEventListener("resize", function () {
        "use strict";
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);
      });
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ["programming languages", "knowledge"],
          ["JAVASCRIPT", 8],
          ["C++", 6],
          ["JAVA", 5],
          ["C", 5],
          ["PYTHON", 4],
        ]);

        var options = {
          pieHole: 0.4,
          backgroundColor: { fill: "transparent" },
          chartArea: { width: "100%", height: "100%" },
          pieSliceText: "label",
          legend: "none",
          slices: {
            0: { color: "rgb(0, 0, 0)" },
            1: { color: "rgb(29, 27, 27)" },
            2: { color: "rgb(59, 33, 92)" },
            3: { color: "rgb(40, 15, 68)" },
            4: { color: "rgb(23, 12, 34)" },
          },
        };

        var chart = new google.visualization.PieChart(
          document.getElementById("donutchart")
        );
        chart.draw(data, options);
      }