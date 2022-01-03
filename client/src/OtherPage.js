import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h1>Co zmieniono</h1>
      <div>W zadaniu narzucono ograniczenie na wartość podanego argumentu, ponieważ dla większych liczb czas obliczania znacząco się zwiększa. Wcześniejszy algorytm był rekurencyjny, a złożoność obliczeniowa wynosi O(Φ<sup>n</sup>), gdzie Φ oznacza złotą liczbę. Dla porównania złożoność obliczeniowa algorytmu iteracyjnego wynosi O(n). To oznacza, że dla argumentu 100 algorytm iteracyjny będzie <b>18</b> <i>rzędów wielkości szybsza</i> od algorytmu rekurencyjnego. Zatem jest tak szybki, że można ograniczenie znieść. Szczegóły można znaleźć <a href="https://www.baeldung.com/cs/fibonacci-computational-complexity">tutaj</a></div><br/>
      <div>W celu wybrania ostatnich 10 indeksów należało zmodyfikować strukturę bazy danych. W tym celu dodano kolumnę created_at aby przechować kiedy dodano indeks. Wtedy w zapytaniu select można było sortować wg czasu dodania oraz ograniczyć liczbę rezultatów.</div>
    </div>
  );
};
