<?php

class Document {
  protected $data;
  protected $filename;

  public function open()
  {
    echo "open document";
  }

  public function save()
  {
    echo "save document";
  }
}

class ReadOnlyDocument extends Document {

  public function save()
  {
    throw new Exception("Unable to save read-only file");
  }
}

class Project {
  protected $documents;

  public function addDocuments(Document $document)
  {
    $this->documents[] = $document;
  }

  public function openAll()
  {
    foreach ($this->documents as $document) {
      $document->open();
    }
  }
  public function saveAll()
  {
    foreach ($this->documents as $document) {
      if ($document instanceof ReadOnlyDocument) {
        continue;
      }
      $document->save();
    }    
  }
}
