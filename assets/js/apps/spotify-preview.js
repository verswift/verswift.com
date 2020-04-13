
function search(term) {
  document.getElementById('music_player').src = "https://open.spotify.com/embed/track/" + term;
}
var items = [
  "0nbXyq5TXYPCO7pr3N8S4I",
  "1rgnBhdG2JDFTbYkYRZAku",
  "0sf12qNH5qcw8qpgymFOqD",
  "6WrI0LAC5M1Rw2MnX2ZvEg",
  "7k4t7uLgtOxPwTpFmtJNTY",
  "4TnjEaWOeW0eKTKIEvJyCa",
  "364dI1bYnvamSnBJ8JcNzN",
  "5yY9lUy8nbvjM1Uyo1Uqoc",
  "696DnlkuDOXcMAnKlTgXXK",
  "41L3O37CECZt3N7ziG2z7l",
  "3ZCTVFBt2Brf31RLEnCkWJ",
  "7FIWs0pqAYbP91WWM0vlTQ",
  "21jGcNKet2qwijlDFuPiPb",
  "2b8fOow8UzyDFAE27YhOZM",
  "7qEHsqek33rTcFNT9PFqLf",
  "6cy3ki60hLwimwIje7tALf",
  "2Fxmhks0bxGSBdJ92vM42m",
  "3jjujdWJ72nww5eGnfs2E7",
  "7lidXGPXPYLNThITAOTlkK",
  "6v3KW9xbzN5yKLt9YKDYA2",
  "2gMXnyrvIjhVBUZwvLZDMP",
  "5px6upUHM3fhOP621Edp4V",
  "3yOlyBJuViE2YSGn3nVE1K",
  "3Dv1eDb0MEgF93GpLXlucZ",
  "7sQKy5vlPQllr0k9IjYJv3",
  "07KXEDMj78x68D884wgVEm",
  "4l0Mvzj72xxOpRrp6h8nHi",
  "7CHi4DtfK4heMlQaudCuHK",
  "1iSqfoUFnQwV0QW1EfUit8",
  "4wNIkl5XGiAACjFBlDWuSd",
  "5DxXgozhkPLgrbKFY91w0c",
  "24Yi9hE78yPEbZ4kxyoXAI",
  "2tnVG71enUj33Ic2nFN6kZ",
  "0TrPqhAMoaKUFLR7iYDokf",
  "5eEQCfq7MXQr6aHLNRUZLs",
  "5stPVcRqb4qixbafP9e8lt",
  "7HMmFQsKsljwTw8bS7lu19",
  "3cqPu20DGTGUoZtbJH2Dmi",
  "3mQ6SLdxxaL52Yte7KF2Ks",
  "6U0FIYXCQ3TGrk4tFpLrEA",
  "6p8eEdiZLKJH8tcjGZuNTK",
  "6Ozh9Ok6h4Oi1wUSLtBseN",
  "0hVXuCcriWRGvwMV1r5Yn9",
  "6mAN61JH0dzyZpWslS11jy",
  "0RiRZpuVRbi7oqRdSMwhQY",
  "7aiClxsDWFRQ0Kzk5KI5ku",
  "4VgYtXCVJ7IbWAZ5ryfvEQ",
  "5Xhqh4lwJPtMUTsdBztN1a",
  "43zdsphuZLzwA9k4DJhU0I",
  "3QzAOrNlsabgbMwlZt7TAY",
  "6wJYhPfqk3KGhHRG76WzOh",
  "1Cv1YLb4q0RzL6pybtaMLo",
  "3eekarcy7kvN4yt5ZFzltW",
  "2wrJq5XKLnmhRXHIAf9xBa",
  "0u2P5u6lvoDfwTYjAADbn4",
  "2ksOAxtIxY8yElEWw8RhgK",
  "6LcauUZjF1eXQrgqMUecHX",
  "70eFcWOvlMObDhURTqT4Fv",
  "2kJwzbxV2ppxnQoYw4GLBZ",
  "3VyjsVV24RmBIbWJAeUJNu",
  "285pBltuF7vW8TeWk8hdRR",
  "6UelLqGlWMcVH1E5c4H7lY",
  "1DWZUa5Mzf2BwzpHtgbHPY",
  "6Gg1gjgKi2AK4e0qzsR7sd",
  "2FvD20Z8aoWIePi7PoN8sG",
  "6ocbgoVGwYJhOv1GgI9NsF",
  "0fea68AdmYNygeTGI4RC18",
  "4R8BJggjosTswLxtkw8V7P",
  "2TH65lNHgvLxCKXM3apjxI",
  "2VxeLyX666F8uXCJ0dZF8B",
  "5JSVa5i6lFPoyOzK4gj0Ox",
  "6gi6y1xwmVszDWkUqab1qw",
  "1v7L65Lzy0j0vdpRjJewt1",
  "51Fjme0JiitpyXKuyQiCDo",
  "2grAr8pWMuLWn8ZYEE9wDV",
  "598yNsG1JFrGd4n2kMoz7F",
  "2pWOMNQJW3g2zmGjP0Vkb0",
  "5DqdesEfbRyOlSS3Tf6c29",
  "6vBdBCoOhKHiYDDOcorfNo",
  "0bMbDctzMmTyK2j74j3nF3",
  "6b2RcmUt1g9N9mQ3CbjX2Y",
  "3jbT1Y5MoPwEIpZndDDwVq",
  "2slqvGLwzZZYsT4K4Y1GBC",
  "4QPEwDdOMhY7rNS05mTyMR",
  "2YpeDb67231RjR0MgVLzsG",
  "3qM0vBxIe4VUbK0Z0smuVP",
  "57vxBYXtHMk6H1aD29V7PU",
  "5a6pdCHlWS2ekOOQ70QnAr",
  "2dpaYNEQHiRxtZbfNsse99",
  "4vUmTMuQqjdnvlZmAH61Qk",
  "4Of7rzpRpV1mWRbhp5rAqG",
  "24NuEDgyRIljwSyY0lsr7b",
  "6FZDfxM3a3UCqtzo5pxSLZ",
  "4yJiXq86uM56uIfIZgE440",
  "2Ec33AVlkTTq8BHFgBTdQs",
  "37zdqI4r1gswIzczSBkRon",
  "22vgEDb5hykfaTwLuskFGD",
  "0pqnGHJpmpxLKifKRmU6WP",
  "3Q6F8RByyhRTJpRtZLY3cg",
  "2rc7BkzO8qepMFAxHtOrXc",
  "1Xnn1TPyr5h0hpRAT4B4EA",
  "7h0d2h0fUmzbs7zeFigJPn",
  "43NqTeL8pgBxKHPMiJKUP5",
  "1lOe9qE0vR9zwWQAOk6CoO",
  "2W4yABdLc4Jnds67Poi5Nl",
  "0e7ipj03S05BNilyu5bRzt",
  "6RyaV7owmVU6fzEPE17sF1",
  "2uIX8YMNjGMD7441kqyyNU",
  "0fySG6A6qLE8IvDpayb5bM",
  "4SSnFejRGlZikf02HLewEF",
  "7xQAfvXzm3AkraOtGPWIZg",
  "3o1CUVeHIid49sabk6A6Nf",
  "4ZLzoOkj0MPWrTLvooIuaa",
  "6Hj9jySrnFppAI0sEMCZpJ",
  "5ry2OE6R2zPQFDO85XkgRb",
  "7qiZfU4dY1lWllzX7mPBI3",
  "4u7EnebtmKWzUH433cf5Qv",
  "5uCax9HTNlzGybIStD3vDh",
  "113PlnpZbHd3WIqeYjhZWv",
  "4jAIqgrPjKLTY9Gbez25Qb",
  "59s0s39NFWScuHDbHytI14",
  "07Oz5StQ7GRoygNLaXs2pd",
  "6Qs4SXO9dwPj5GKvVOv8Ki",
  "5hff5RQeE84pznOt8WEWeO",
  "0JjM9bKm4wrwohMslcm892",
  "2ez6qvOTHKeI3ss80NGqnI",
  "1DFD5Fotzgn6yYXkYsKiGs",
  "1V7JaMp11LKGwKiVmSetf0",
  "2xLMifQCjDGFmkHkpNLD9h",
  "5Id5B3dxJZhPcV9GzgYZZe",
  "7hpJ9tATWb2vztlq99hERP",
  "6Y4PDQv4XjYjHLeLmvyOt0",
  "0tgVpDi06FyKpA1z0VMD4v",
  "75dLEqanQTupF3dtP9exT5",
  "7FGq80cy8juXBCD2nrqdWU",
  "3e9HZxeyfWwjeyPAMmWSSQ",
  "6RRNNciQGZEXnqk8SQ9yv5",
  "3ee8Jmje8o58CHK66QrVC2",
  "7m9OqQk4RVRkw9JJdeAw96",
  "25sgk305KZfyuqVBQIahim",
  "38YP1STiBe3AZevFFJILf4",
  "7fa9MBXhVfQ8P8Df9OEbD8",
  "6kls8cSlUyHW2BUOkDJIZE",
  "1bRO28yzxgO3y3UmNR29TZ",
  "58wyJLv6yH1La9NIZPl3ne",
  "6IRdLKIyS4p7XNiP8r6rsx",
  "1G2CAJeP7rCwOZjlSJ0Zw3",
  "6oJ6le65B3SEqPwMRNXWjY",
  "0rKtyWc8bvkriBthvHKY8d",
  "3U4isOIWM3VvDubwSI3y7a",
  "6gBFPUFcJLzWGx4lenP6h2",
  "0Q2n5yzl2XRqYbV77tZNYp",
  "4z6wo6PJG4Fve45OXK6D9m",
  "3HWzoMvoF3TQfYg4UPszDq",
  "2P91MQbaiQOfbiz9VqhqKQ",
  "0RDgqtvOHLwcI6yz9bjsZV",
  "5OaBhC8NjdqDhHF9I6r9lS",
  "4Yxc55NX3tAXC2mHRAhtcW",
  "3g0mEQx3NTanacLseoP0Gw",
  "6XHVuErjQ4XNm6nDPVCxVX",
  "6CcJMwBtXByIz4zQLzFkKc",
  "4a6q8CR2hzLk2plDkSxkfD",
  "4t9a07PAghtQMRAIP9FQ7Z",
  "7dt6x5M1jzdTEt8oCbisTK",
  "1nocRtwyNPVtGcIJqfgdzZ",
  "0uI7yAKUf52Cn7y3sYyjiX",
  "3Fj47GNK2kUF0uaEDgXLaD",
  "2bT1PH7Cw3J9p3t7nlXCdh",
  "2u3EyuCqqV31woqGvO9LBz",
  "1mXVgsBdtIVeCLJnSnmtdV",
  "2iUXsYOEPhVqEBwsqP70rE",
  "5qrSlOut2rNAWv3ubArkNy",
  "4ea9w8c4ROqiZpJVhfBA3m",
  "5hVghJ4KaYES3BFUATCYn0",
  "1ZMiCix7XSAbfAJlEZWMCp",
  "3Ghyp3X5Ua9ypHnBIgOObI",
  "1cVlW9WQiGlFdWUXFdFZGh",
  "7BlBVFwvbWvcwNcUarQmjk",
  "1rqqCSm0Qe4I9rUvWncaom",
  "1ndyl3wJCFs872XZ3ztPk6",
  "0DiDStADDVh3SvAsoJAFMk",
  "6TqXcAFInzjp0bODyvrWEq",
  "3XF5xLJHOQQRbWya6hBp7d",
  "2qxmye6gAegTMjLKEBoR3d",
  "25ZAibhr3bdlMCLmubZDVt",
  "2gwkD6igEhQbDQegRCcdoB",
  "6osaMSJh9NguagEDQcZaKx",
  "6fxVffaTuwjgEk5h9QyRjy",
  "0JP9xo3adEtGSdUEISiszL",
  "2ZrAjMSmlbDIil0JaVgTHh",
  "3CYH422oy1cZNoo0GTG1TK",
  "2JvzF1RMd7lE3KmFlsyZD8",
  "6zGPytJiZmFuyVq7RTNO9G",
  "2Rk4JlNc2TPmZe2af99d45",
  "2qG5sZ7Si6sdK74qLxedYM",
  "7BKLCZ1jbUBVqRi2FVlTVw",
  "6K4t31amVTZDgR3sKmwUJJ",
  "1ToprX3cpBiXoAe5eNSk74",
  "2IRZnDFmlqMuOrYOLnZZyc",
  "2BgEsaKNfHUdlh97KmvFyo",
  "1rgnBhdG2JDFTbYkYRZAku"
];

function getSong(){
 var item = items[Math.floor(Math.random()*items.length)];
 search(item);
}
