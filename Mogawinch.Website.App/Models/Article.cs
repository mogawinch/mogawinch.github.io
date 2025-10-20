#nullable enable
using System.Text.Json.Serialization;

namespace Mogawinch.Models
{
    public class Article
    {
        public string Title { get; set; } = default!;

        public string ImagePath { get; set; } = default!;

        public string SecondaryImagePath { get; set; } = default!;

        public string Date { get; set; } = default!;

        public string Author { get; set; } = default!;

        public string Excerpt { get; set; } = default!;

        public string[] Paragraph { get; set; } = default!;

        public int? ReviewScore { get; set; }

        public string[]? GoodSummary { get; set; }

        public string[]? BadSummary { get; set; }

        [JsonIgnore]
        public string? Path { get; set; } 
    }
}